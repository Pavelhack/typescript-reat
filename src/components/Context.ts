import React, { Dispatch, SetStateAction } from "react";

type con = {
    context ?:number,
    setContext ?: Dispatch<SetStateAction<number>> | undefined,
    isAutorized ?: boolean,
    setAutorized ?: Dispatch<SetStateAction<boolean>> | undefined,
};

export const Context = React.createContext<con>({});
