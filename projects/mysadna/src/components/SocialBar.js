import React, { PureComponent } from 'react';
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Grid from "@material-ui/core/es/Grid/Grid";

export default class SocialBar extends PureComponent {

    item = (icon, url) => {
        return (
            <IconButton component="a" href={url}>
                {React.createElement(icon)}
            </IconButton>
        );
    };

    items = socialData => {
      return Object.keys(socialData)
          .map(key => this.item(socialData[key]['icon'], socialData[key]['url']))
          .reduce((prev, curr) => [prev, curr]);
    };

    render() {
        const { social } = this.props;
        return (
            <Card style={{padding:"2px", margin:"15px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={this.props.imageUrl}
                    />
                    <CardActions>
                        <Grid container justify="center">
                            {this.items(social)}
                        </Grid>
                    </CardActions>

                </CardActionArea>
            </Card>
        );
    }
}