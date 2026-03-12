import TextField from "@mui/material/TextField";

function TextFieldsMUI()
{
    return(
        <>
            <TextField label='name' type="text" variant='outlined' helperText='Enter Your Name'>Name:</TextField> &nbsp;
            <TextField label='email' type="email" variant='filled' helperText='Enter Your Email'>Email:</TextField> &nbsp;
            <TextField label='password' type="password" varient='standard' helperText='Enter Your Password'>Password:</TextField> &nbsp;
        </>
    )
}

export default TextFieldsMUI;