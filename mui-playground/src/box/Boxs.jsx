import Box from '@mui/material/Box';

function BoxsMUI() {
    return (
        <>
            <Box sx={{ width: 200, height: 100, bgcolor: 'lightblue', p: 2, m: 2 }}>
                Hello Box
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150, bgcolor: 'pink' }}>
                Centered Content
            </Box>
        </>
    )
}

export default BoxsMUI;