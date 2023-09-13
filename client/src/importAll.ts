import React,{useEffect,useState,memo}                 from "react";
import {Container,Div,Flex,Footer,Grid,Header,Main}    from "./Components/Global/Container";
import { Choice, Menu }                                from "./Components/Global/Menu";
import LoginValidation                                 from "./Validation/loginValidation";
import RegisterValidation                              from "./Validation/registerValidation";
import useStore                                        from "./Hooks/useStore";
import useRefV2                                        from "./Hooks/useRefV2";
import Copyright                                       from "./Components/Global/Copyright";
import GuestHome                                       from "./Components/Guest/GuestHome";
import GuestLogin                                      from "./Components/Guest/GuestLogin";
import GuestRegister                                   from "./Components/Guest/GuestRegister";
import Guest                                           from "./Components/Guest/Guest";
import User                                            from "./Models/User";
import Button                                          from "./Components/Global/Button";
import Debug                                           from "./Dev/Debug";
import { Provider }                                    from "react-redux";
import {SocketProvider}                                from "./Socket/Socket"
import myStore                                         from "./Store/Store"
import GlobalStyle                                     from "./Components/Global/GlobalStyle";
import { useSelector }                                 from "react-redux"
import { useDispatch }                                 from "react-redux";
import {LoginSettings,RegisterSettings}                from "./Validation/Setting"
import ConvertPoint                                    from "./Functions/ConvertPoint";
import App                                             from './App';
import ReactDOM                                        from 'react-dom/client';
import ResultValid                                     from "./Validation/ResultValid";
import {socket}                                        from "./Socket/Socket";


const HeaderBackground = require("./Images/Backgrounds/headerGuest.jpg")
const FooterBackground = require("./Images/Backgrounds/headerGuest.jpg")

export { socket              } 
export { LoginSettings       } 
export { RegisterSettings    } 
export { Provider            }  
export { SocketProvider      }  
export { myStore             }  
export { useDispatch         }  
export { App                 }  
export { ResultValid         }  
export { ReactDOM            }  
export { ConvertPoint        }  
export { useSelector         }  
export { GuestRegister       }  
export { GuestLogin          }      
export { React               }  
export { memo                }  
export { useRefV2            }      
export { useState            }      
export { useEffect           }      
export { useStore            }      
export { Container           }      
export { Div                 }  
export { Flex                }  
export { Footer              }  
export { Grid                }  
export { Header              }  
export { Main                }  
export { Copyright           }      
export { Choice              }  
export { Menu                }  
export { Guest               }  
export { GuestHome           }      
export { LoginValidation     }              
export { RegisterValidation  }              
export { User                }              
export { Button              }              
export { Debug               }              
export { GlobalStyle         }              



export {HeaderBackground}
export {FooterBackground}























