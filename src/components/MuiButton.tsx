import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";


export const MuiButton = () => {
  /*const [formats, setFormats]= useState<string[]>([])   */  //to selectall at a time
  const [formats, setFormats]= useState<string | null>(null)   
  console.log({formats})
  /*const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats: string[]) =>{setFormats(updatedFormats)} */
  const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats: string|null) =>{setFormats(updatedFormats)}
  return (
    <Stack spacing={4} >
        <Stack spacing={2} direction='row'>
            <Button variant = 'text'> Text</Button>
            <Button variant = 'contained'> Contained</Button>
            <Button variant = 'outlined'> Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant = 'contained' color='primary'> Primary</Button>
            <Button variant = 'contained' color='secondary'> Secondary</Button>
            <Button variant = 'text' color='error'> Error</Button>
            <Button variant = 'contained' color='warning'> Warning</Button>
            <Button variant = 'outlined' color='info'> Info</Button>
            <Button variant = 'contained' color='success'> Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant = 'contained' size='small'> Small</Button>
            <Button variant = 'contained' size='medium'> Medium</Button>
            <Button variant = 'contained' size='large'> Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant="contained" startIcon={<SendIcon/>} >Send </Button>
            <Button variant="contained" endIcon={<SendIcon/>}> Send </Button>

            <Button variant="contained" startIcon={<SendIcon/>} disableElevation >Send </Button>
            <Button variant="contained" startIcon={<SendIcon/>} disableRipple> Send </Button>
            <Button variant="contained" color='secondary' startIcon={<SendIcon/>} onClick={()=> alert("Clicked")}> Send </Button>

            <IconButton aria-label="send"> <SendIcon/> </IconButton>
            <IconButton aria-label="send" color='error' > <SendIcon/> </IconButton>
            <IconButton aria-label="send" color= 'warning' size='small'> <SendIcon/> </IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='outlined' orientation="vertical" aria-label='alignment button group'>
            <Button> Left</Button>
            <Button> Center</Button>
            <Button> Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='contained' color="secondary" size="large">
            <Button> Left</Button>
            <Button onClick={() => alert("Center Clicked")}> Center</Button>
            <Button> Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction="row">
            <ToggleButtonGroup aria-label = 'text formatting' value={formats} onChange={handleFormatChange} exclusive>
                <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic' aria-label="italic"><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>

        
    </Stack>
  )
}
