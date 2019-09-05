import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'  

import Helmet from 'react-helmet'
import Messages from './messages/toastr'

import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down'
import { download } from 'react-icons-kit/icomoon/download'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


class Main extends Component {

    render() {
        return (
              <MuiThemeProvider>
                <section>
                    <Grid container spacing={24}>
                        <Grid item xs={12} className={'centerAlign'}>
                            <Grid container xs={12} className={'centerAlign border'}>
                                <Grid item xs={4} className={'alignLeft box-ranking'}>
                                        <Button aria-label="Close" className="btnExp">
                                            <span className="btnNew">Exportar</span>
                                            <Icon icon={ic_keyboard_arrow_down} />
                                        </Button>
                                
                                </Grid>
                                <Grid item xs={8} className={'alignRight box-ranking'}>
                                        <TextField
                                             id="outlined-dense"
                                             label="Dense"
                                             margin="dense"
                                             variant="outlined"
                                             style={{ borderBottom: 0 }}
                                           />
                                </Grid>
                            </Grid>


                            <Grid item xs={12} className="list-sessions">
                                {this.props.children}
                            </Grid>
                        </Grid>
                    </Grid>
                     <Helmet
                        title="Jump Park "
                        style={[{
                            "cssText": `
                            body {
                                    min-height: 100%;
                                    background: #c3ddf4;
                                    padding: 15px;
                                    font-family: 'Comfortaa-Regular'
                                }
                                #root{
                                    padding: 7px;
                                    margin: 0px auto;
                                    box-shadow: -2px 11px 40px rgba(4, 0, 0, 0.22);
                                    background: #f2f4f8;
                              }
                              .alignRight{
                                    text-align: right !important;
                                }
                              .btnExp{
                                    background: #52BC76;
                                    padding: 0;
                                    color: white;
                               }
                              .btnExp:hover,
                              .btnExp:focus{
                                  background: #52BC76 !important;
                             }
                              .btnExp svg {
                                    color: white !important;
                             }
                          
                            `
                        }]}
                    />
                    <Messages/>
                </section>
               </MuiThemeProvider>
        )
    }
}
export default Main
