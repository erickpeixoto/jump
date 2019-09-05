import React, { Component } from 'react'
import Helmet from 'react-helmet'
class StyleHelmet extends Component {
  render() {
    return (
      <Helmet
        style={[
          {
            cssText: `
                             
                            .box-pagination{
                                float: right;
                                position: relative !important;
                                top: 14px !important;
                           } 
                           .pagination li.active {
                                background-color: #49bfe1;
                                border-radius: 50%;
                                height: 30px;
                                width: 30px;
                                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 2px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
                            }
                            .pagination li a {
                                font-size: 15px;
                            }
                                .item {
                                    background: white !important;
                                    box-shadow: rgba(0, 0, 0, 0) 0px 3px 2px, rgba(0, 0, 0, 0.08) 0px 6px 18px !important;
                                    border: 1px solid #e6e6e68a;
                                }
                                .item .type{
                                        color: #18c3d0;
                                        background: #8ce8fb26;
                                        padding: 11px;
                                        font-size: 10px;
                                        position: relative;
                                        top: -4px;
                                        left: -11px;
                                }
                                .item .count,
                                .sum button {
                                       margin-top: 14px;
                                       padding: 10px 0px 10px 10px;
                                }
                                .item .count svg{
                                        height: 17px !important;
                                        width: 17px !important;
                                }
                                .item .sum{
                                    font-size: 12px;
                                    font-weight: bold;
                                    position: relative;
                                    top: -1px;
                                    left: 9px;
                                }
                                .item button.delete {
                                    width: 47px;
                                    padding: 2px 7px 0px 0px;
                                    background: #c5c5c5;
                                    position: relative;
                                    top: -3px;
                                    left: 3px;
                                    margin-right: 5px;
                                    top: -5px;
                                    left: 19px;
                                    margin-right: 5px;
                                }
                                .item button.delete:hover {
                                    width: 47px;
                                    padding: 2px 7px 0px 0px;
                                    background: #db6a64;
                                    position: relative;
                                    top: -5px;
                                    left: 19px;
                                    margin-right: 5px;
                                }
                                .item button.check {
                                        background: #5fcac7;
                                        position: relative;
                                        top: -7px;
                                        float: right;
                                        left: 9px;
                                    }
                                 .item button.update {
                                        width: 47px;
                                        padding: 2px 7px 31px 2px;
                                        background: #c5c5c5;
                                        position: relative;
                                        top: -5px;
                                        left: 19px;
                                        margin-right: 5px;

                                }
                                .item button.update:hover {
                                    width: 47px;
                                     padding: 2px 7px 31px 2px;
                                     background: #fcbd53bf;
                                     position: relative;
                                     top: -5px;
                                     left: 19px;
                                     margin-right: 5px;

                             }
                           
                         
                                .header-sessions {
                                    background: #1E5168 !important;
                                    color: white !important;
                                }
                        `
          }
        ]}
      />
    )
  }
}

export default StyleHelmet
