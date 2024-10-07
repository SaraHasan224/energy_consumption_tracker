import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
    ROUTES
} from "../utils";

function usePageViews() {
    let location = useLocation()

    let dispatch = useDispatch();
    const { route } = useSelector(state => state.redirect);
    const [newRoute, setNewRoute] = useState(route.to);

    useEffect(() => {
        setNewRoute(route.to)
        // setNewRoute((prev)=>  route.to)
        let path = ROUTES.find(route => {
            return route.path === location?.pathname
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location]);


}
export default usePageViews;