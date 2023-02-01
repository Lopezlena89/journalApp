import { useDispatch, useSelector } from "react-redux"
import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal"



export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () =>{
    dispatch( startNewNote() ); 
  }

  const {isSaving,active} = useSelector(status=>status.journal)


  return (
    <JournalLayout>
      
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae repellat fugit placeat.
        Doloribus necessitatibus neque quos labore aspernatur reiciendis nemo saepe architecto odit! Fugit,
        laudantium dicta numquam assumenda nisi similique.
      </Typography> */}
      {
        (!!active)
        ?<NoteView/>
        :<NothingSelectedView/> 
      }
     
      

      <IconButton
        disabled={isSaving} 
        onClick={onClickNewNote}
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': {backgroundColor:'error.main',opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}

      >
      <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
      
    </JournalLayout>
  )
}
