import {Typography} from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant = 'h1'> Heading h1</Typography>
        <Typography variant = 'h2'> Heading h2</Typography>
        <Typography variant = 'h3'> Heading h3</Typography>
        <Typography variant = 'h4' component="h1"> Heading h4</Typography>
        <Typography variant = 'h5' gutterBottom> Heading h5</Typography>
        <Typography variant = 'h6'> Heading h6</Typography>
        <Typography variant = 'subtitle1'> Subtitle1</Typography>
        <Typography variant = 'subtitle2'> Subtitle2</Typography>
        <Typography variant = 'body1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit at nostrum minima quidem cum rerum explicabo officiis aspernatur deleniti debitis incidunt reiciendis iure error tempore, quas totam, nulla consequuntur?</Typography>
        <Typography variant = 'body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptas cum dicta commodi optio libero, rem ad similique sit officia voluptate nam debitis! Sunt nesciunt ipsum, quos minima earum officia.</Typography>
    </div>
  )
}
