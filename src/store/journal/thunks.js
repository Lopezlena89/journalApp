import {collection, deleteDoc, doc, setDoc} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, deleteNoteById, noteUpdated, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from './journalSlice';


export const startNewNote = () =>{
    return async(dispatch,getState)=>{

        dispatch(savingNewNote())

        const {uid} = getState().auth;
        const newNote = {
            title:'',
            body:'', 
            date:new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB,`${uid}/journal/notas/`))
        const setDocResp = await setDoc(newDoc,newNote);
        newNote.id = newDoc.id;
        //dispatch
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
        //dispatch(activar)
    }
}

export const startLoadingNotes = () =>{
    return async(dispatch,getState) =>{
        const {uid} = getState().auth;
        if(!uid) throw new Error('El uid del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}

export const startSaveNote = () =>{
    return async(dispatch,getState)=>{
        dispatch(setSaving());
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        
        const docRef = doc(FirebaseDB,`${uid}/journal/notas/${note.id}`);
        await setDoc(docRef,noteToFirestore,{merge:true});

        dispatch(noteUpdated(note))


    }
}

export const starUploadingFiles=(files=[])=>{
    return async(dispatch)=>{
        dispatch(setSaving());
        await fileUpload(files[0]);

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) )
        }

        const photosUrls =  await Promise.all(fileUploadPromises);
        
        dispatch(setPhotosToActiveNote(photosUrls));


    }
}

export const startDeleatingNote = () =>{
    return async(dispatch,getState)=>{

        const {uid} =getState().auth;
        const {active:note}  = getState().journal;

        const docRef = doc(FirebaseDB,`${uid}/journal/notas/${note.id}`);

        await deleteDoc(docRef);
       
        dispatch(deleteNoteById(note.id))

    }
}