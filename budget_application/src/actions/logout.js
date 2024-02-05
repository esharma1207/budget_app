import { redirect } from "react-router-dom";
import { deleteItem } from "../Helpers";
import { toast } from "react-toastify";

export async function logoutAction()
{
    deleteItem({
        key: "userName"
    })
    toast.success("You have deleted your account.")
    //return redirect
    return redirect('/')
}