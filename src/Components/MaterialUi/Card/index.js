import { Card as GCard, CardActionButton as GCardActionButton, CardActionIcon as GCardActionIcon, CardActionButtons as GCardActionButtons,
         CardMedia as GCardMedia, CardMediaContent as GCardMediaContent, CardPrimaryAction as GCardPrimaryAction,
         CardActions as GCardActions, CardActionIcons as GCardActionIcons } from '@rmwc/card';
import '@rmwc/card/styles';

export function Card(props){
    let childrenMc = props.children || null;
    return (
        <GCard {...props}>
            {childrenMc}
        </GCard>
    )
};

export function CardActionButton(props){
    let childrenMc = props.children || null;
    return (
        <GCardActionButton  className="actionbtn" {...props}>
            {childrenMc}
        </GCardActionButton>
    )
};

export function CardActionIcon(props){
    let childrenMc = props.children || null;
    return (
        <GCardActionIcon {...props}>
            {childrenMc}
        </GCardActionIcon>
    )
};

export function CardMedia(props){
    let childrenMc = props.children || null;
    return (
        <GCardMedia {...props}>
            {childrenMc}
        </GCardMedia>
    )
};

export function CardMediaContent(props){
    let childrenMc = props.children || null;
    return (
        <GCardMediaContent {...props}>
            {childrenMc}
        </GCardMediaContent>
    )
};

export function CardPrimaryAction(props){
    let childrenMc = props.children || null;
    return (
        <GCardPrimaryAction {...props}>
            {childrenMc}
        </GCardPrimaryAction>
    )
};

export function CardActionButtons(props){
    let childrenMc = props.children || null;
    return (
        <GCardActionButtons {...props}>
            {childrenMc}
        </GCardActionButtons>
    )
};

export function CardActions(props){
    let childrenMc = props.children || null;
    return (
        <GCardActions {...props}>
            {childrenMc}
        </GCardActions>
    )
};

export function CardActionIcons(props){
    let childrenMc = props.children || null;
    return (
        <GCardActionIcons {...props}>
            {childrenMc}
        </GCardActionIcons>
    )
};