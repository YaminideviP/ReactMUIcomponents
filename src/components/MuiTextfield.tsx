import {Stack, TextField, InputAdornment} from '@mui/material'
import {useState} from 'react'

export const MuiTextfield = () => {

  const [value,setValue] = useState("")

  return (
    <Stack spacing ={4}>
        <Stack direction ='row' spacing={2} padding={4}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Small secondary' size='small' color='secondary'/>
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Name' required />
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Password' helperText='Do not share your password to anyone' />
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Password' type='Password' helperText='Do not share your password to anyone' />
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Disabled' type='Password' disabled />
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Read only' InputProps={{readOnly: true}}/>
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}/>
        </Stack>
        <Stack direction ='row' spacing={2}>
            <TextField label='Weight' InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}}/>
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Name' required error/>
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Name' required value={value} onChange={e =>setValue(e.target.value)} error={!value} helperText={!value? 'Required': 'Do not Share your password to anyone'} />
        </Stack>

    </Stack>
  )
}
