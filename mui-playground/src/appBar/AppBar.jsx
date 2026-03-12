import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AppBarMUI() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">WebTechky</Typography>
                </Toolbar>
            </AppBar><br />

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Webtechky</Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default AppBarMUI;