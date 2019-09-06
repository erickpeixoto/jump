import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'  

import Helmet from 'react-helmet'
import Messages from './messages/toastr'
import Grid from '@material-ui/core/Grid'
import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down'
import { ic_search } from 'react-icons-kit/md/ic_search'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


class Main extends Component {

    render() {
        return (
              <MuiThemeProvider>
                <section>
                    <Grid container spacing={24}>
                        <Grid item xs={12} className={'centerAlign'}>
                            <Grid container xs={12} className={'centerAlign'}>
                                <Grid item xs={4} className={'alignLeft box-ranking'}>
                                        <Button aria-label="Close" 
                                                className="btnExp"
                                                onClick={(e) => console.info("Exportar") }

                                                >
                                            <span className="btnNew">Exportar</span>
                                            <Icon icon={ic_keyboard_arrow_down} />
                                        </Button>
                                
                                </Grid>
                                <Grid item xs={8} className={'alignRight box-search'}>
                                        <TextField
                                             id="outlined-dense"
                                             className={'input'} 
                                             label="Digite sua pesquisa..."
                                             margin="dense"
                                             variant="outlined"
                                             style={{ borderBottom: 0 }}
                                             onKeyPress={(e) => e.key === "Enter" && console.info(e.target.value) }
                                           />
                                            <Icon icon={ic_search} />

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
                                    position: relative !important;
                                    left: 35px !important;
                                    top: 18px !important;
                                    
                               }
                              .btnExp:hover,
                              .btnExp:focus{
                                  background: #52BC76 !important;
                             }
                              .btnExp svg {
                                    color: white !important;
                             }
                             .MuiInputBase-marginDense-169{
                                     height: 35px;
                             }
                            .MuiInputBase-marginDense-169 input{
                                    border: 0px;
                                  
                            }
                            .MuiFormControl-marginDense-129 {
                                position: relative !important;
                                    right: 35px !important;
                                    top: 18px !important;
                            }
                            .box-search svg {
                                width: 28px;
                                height: 28px;
                                color: #1E5168;
                                position: relative;
                                right: 70px;
                                top: 30px;
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
