import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text
} from "react-native";
import { setLoggedIn } from "../../store/login/actions";
import { IApplicationState } from "~/store/IApplicationState";
import { ILoginInfo } from "~/store/login/types";




const Login: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector<IApplicationState, ILoginInfo>(({ loginInfo }) => loginInfo)

  useEffect(() => {
    dispatch(setLoggedIn(!loggedIn))
  }, [])



  return (
    <>
      <View>
        <Text>{loggedIn ? 'mani' : 'raj'}</Text>
      </View>
    </>
  );
}

export default Login

