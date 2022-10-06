import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {

    const [formats, setFormats] = useState<String[]>([])
    console.log(formats)
    const handleFormatChange = (_event: React.MouseEvent, updatedFormats: string[]) => {
        setFormats(updatedFormats);
    }

    const [formatsone, setFormatsone] = useState<String | null>(null)
    console.log(formatsone)
    const handleFormatChangeOne = (_event: React.MouseEvent, updatedFormats: string | null) => {
        setFormatsone(updatedFormats);
    }

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack direction='row' spacing={2} style={{ textTransform: 'capitalize' }}>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>

            <Stack direction='row' spacing={2} style={{ textTransform: 'capitalize' }}>
                <Button variant='outlined' color='primary'>primary</Button>
                <Button variant='outlined' color='secondary'>secondary</Button>
                <Button variant='outlined' color='error'>error</Button>
                <Button variant='outlined' color='warning'>warning</Button>
                <Button variant='outlined' color='info'>info</Button>
                <Button variant='outlined' color='success'>success</Button>
            </Stack>

            <Stack direction='row' spacing={2} style={{ textTransform: 'capitalize' }}>
                <Button variant='text' color='primary'>primary</Button>
                <Button variant='text' color='secondary'>secondary</Button>
                <Button variant='text' color='error'>error</Button>
                <Button variant='text' color='warning'>warning</Button>
                <Button variant='text' color='info'>info</Button>
                <Button variant='text' color='success'>success</Button>
            </Stack>

            <Stack spacing={2} display='block' direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <Button variant='outlined' startIcon={<SendIcon />} onClick={() => alert('message sent')}>Send</Button>
                <Button variant='outlined' endIcon={<SendIcon />} disableRipple>Send</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <IconButton color='primary' size='medium'>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='outlined'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='text'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained' orientation='vertical'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained' size='small' color='warning'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ToggleButtonGroup
                    aria-label='text formatting'
                    value={formats}
                    onChange={handleFormatChange}
                    size='small'
                    color='success'
                >
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ToggleButtonGroup
                    aria-label='text formatting'
                    value={formatsone}
                    onChange={handleFormatChangeOne}
                    orientation='vertical'
                    size='small'
                    color='warning'
                    exclusive
                >
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
