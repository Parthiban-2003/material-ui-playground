import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function BoxModelMUI() {
    return (
        <>
            <Button
                variant="contained"
                sx={{ bgcolor: 'purple', color: 'white', px: 4, py: 2, borderRadius: 2 }}
            >
                Submit Forms
            </Button>

            <Typography
                sx={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'navy',
                    textAlign: 'center',
                    mb: 2
                }}
            >
                Webtechky Heading
            </Typography>

            <Card
                sx={{
                    maxWidth: 350,
                    bgcolor: '#f5f5f5',
                    p: 3,
                    m: 2,
                    borderRadius: 3,
                    boxShadow: 6
                }}
            >
                <CardContent>
                    Hello Welcome, WebTechky
                </CardContent>
            </Card>
        </>
    )
}

export default BoxModelMUI;