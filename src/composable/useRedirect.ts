import type RedirectOpts from "@/types/RedirectOpts";

type ReturningType = () => void;

export default function (opts: RedirectOpts): ReturningType {
    const redirect = () => {
        window.open(
            opts.href,
            opts.target.unwrapOr('_blank'),
            opts.rel.unwrapOr(''),
        );
    };

    return redirect;
}