import React from 'react';
import {
    Card, Button, CardPrimaryAction, Typography, Grid, GridCell, TextField
} from './MaterialUi';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            visibility: false,
        }
        this.handleDisplay = this.handleDisplay.bind(this);
    }


    handleDisplay() {
        const { navigate } = this.props;
        const { userName, password, visibility } = this.state;
        const type = visibility ? '' : 'password';
        const icon = visibility ? 'visibility' : 'visibility_off';
        return (
            <>
                <Card style={{ width: '23rem', height: '30rem', backgroundColor: '#edeeef' }}>
                    <Grid style={{ margin: '1rem' }}>
                        <GridCell span={12}>
                            <CardPrimaryAction>
                                <Typography use="headline6" tag="h2" style={{ borderBottom: 'solid', width: '4rem' }}>
                                    SignIn
                                </Typography>
                                <Typography use="body2">
                                    Stay updated on your professional world
                                </Typography>
                            </CardPrimaryAction>
                        </GridCell>
                        <GridCell span={12}>
                            <TextField style={{ width: '100%' }} value={userName} outlined label="User Name"
                                onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                        </GridCell>
                        <GridCell span={12}>
                            <TextField style={{ width: '100%' }} value={password}
                                trailingIcon={{ icon: icon, onClick: () => this.setState((prevState) => ({ visibility: !prevState.visibility })) }}
                                outlined label="Password" type={type}
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </GridCell>
                        <GridCell span={12}>
                            <Button className="primaryButton" type="submit" style={{ width: '100%' }} raised
                                onClick={() => navigate('/HomePage')}>Sign In</Button>
                        </GridCell>
                    </Grid>
                </Card>
            </>
        )
    }

    render() {
        return (
            <>
                <Grid>
                    <GridCell span="4">
                    </GridCell>
                    <GridCell span="4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '5rem', marginBottom: 'auto' }}>
                        {this.handleDisplay()}
                    </GridCell>
                    <GridCell span="4" />
                </Grid>
            </>
        )
    }
}

export default SignIn