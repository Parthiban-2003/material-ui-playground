import Typography from '@mui/material/Typography';

function TypographyMUI()
{
    return(
        <>
            {/* Typography Headings */}
            <Typography variant='h1'>Heading 1</Typography>
            <Typography variant='h2'>Heading 2</Typography>
            <Typography variant='h3'>Heading 3</Typography>
            <Typography variant='h4'>Heading 4</Typography>
            <Typography variant='h5'>Heading 5</Typography>
            <Typography variant='h6'>Heading 6</Typography>
            <br />

            {/* Typogrpahy Body */}
            <Typography variant='body1'>Body 1</Typography>
            <Typography variant='body2'>Body 2</Typography>
            <br />

            {/* Typogrpahy Sub Titles */}
            <Typography variant='subtitle1'>Sub Titles 1</Typography>
            <Typography variant='subtitle2'>Sub Titles 2</Typography>
            <br />

            {/* Typogrpahy Colors */}
            <Typography color='primary'>Color Primary</Typography>
            <Typography color='secondary'>Color Secondary</Typography>
            <Typography color='success'>Color Sucess</Typography>
            <Typography color='error'>Color Danger</Typography>
            <Typography color='info'>Color Inforamtion</Typography>
            <Typography color='warning'>Color Warning</Typography>
            <br />

            {/* Typogrpahy Alignments */}
            <Typography color='primary' align='center'>Center text</Typography>
            <Typography color='secondary' align='right'>Right text</Typography>
            <Typography color='success' align='left'>Left text</Typography>
            <br />
        </>
    )
}

export default TypographyMUI;