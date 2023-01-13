import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae repellat fugit placeat.
        Doloribus necessitatibus neque quos labore aspernatur reiciendis nemo saepe architecto odit! Fugit,
        laudantium dicta numquam assumenda nisi similique.
      </Typography> */}
      {/* <NothingSelectedView/> */}
      <NoteView/>

      <IconButton
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
