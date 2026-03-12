import Button from '@mui/material/Button';

function ButtonMUI() {
    return (
        <>
            {/* Button Variants */}
            <Button variant='text'> Submit </Button> &nbsp;
            <Button variant='contained'>Login</Button> &nbsp;
            <Button variant='outlined'>signIn</Button>

            <br /><br />

            {/* Button types */}
            <Button variant="contained" color="primary">Primary</Button> &nbsp;
            <Button variant="contained" color="secondary">Secondary</Button> &nbsp;
            <Button variant="contained" color="success">Success</Button> &nbsp;
            <Button variant="contained" color="error">Error</Button> &nbsp;
            <Button variant="contained" color="warning">Warning</Button> &nbsp;
            <Button variant="contained" color="info">Info</Button> &nbsp;

            <br /><br />

            {/* Button Sizes */}
            <Button variant='contained' size='small'>Small</Button> &nbsp;
            <Button variant='contained' size='medium'>Medium</Button> &nbsp;
            <Button variant='contained' size='large'>Large</Button> &nbsp;
        </>
    )
}

export default ButtonMUI;