import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CardsMUI() {
    return (
        <>
            <Card sx={{ maxWidth: 300, margin: 2 }}>
                <CardContent>
                    <Typography variant="h5">Card Title</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem ipsum repudiandae mollitia blanditiis optio dicta omnis, quas facilis. Quam explicabo consequatur officiis saepe optio sapiente sunt culpa dolor id?</Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                    <Typography variant="h5">Card Title</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
        </>

    );
}

export default CardsMUI;