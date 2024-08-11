import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/use.actions";
import React from "react";

const SingUp = async () => {

    return (
        <section className="flex-center size-full maz-sm:px-6">
            <AuthForm type="sign-up" />
        </section>
    );
};

export default SingUp;
