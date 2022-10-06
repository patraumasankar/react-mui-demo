import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <>
            <Typography variant="h1">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4" gutterBottom>h4 heading</Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>

            <Typography variant="subtitle1">Sub title 1 heading</Typography>
            <Typography variant="subtitle2">Sub title 2 heading</Typography>

            <Typography variant="body1">body1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus soluta iste et fugit, assumenda animi, accusantium aliquid recusandae rerum odio voluptatem sint veritatis voluptatum. Laborum placeat deleniti magnam magni!</Typography>
            <Typography variant="body2">body2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laudantium, maiores dolorum necessitatibus asperiores numquam eius illum voluptatibus blanditiis quos perspiciatis ullam eum saepe ipsa earum corrupti et nam molestiae!</Typography>
            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                overline text
            </Typography>
        </>
    )
}
