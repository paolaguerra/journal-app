import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayaout } from "../layout/JournalLayaout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";


export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal);


  const onClickNewNote = () => {
    dispatch( startNewNote() );

  }
  return (
    
      <JournalLayaout>

        {
          (!!active)
            ? <NoteView />
            : <NothingSelectedView />
        }

        <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        >
          <AddOutlined 
            sx={{ fontsize: 30 }}
          />
        </IconButton>

      </JournalLayaout>
    
  );
};
