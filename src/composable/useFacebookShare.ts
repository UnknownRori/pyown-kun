import type { Target } from "@/types/ShareOpts";
import type { Option } from "@sniptt/monads";

type FacebookShareOpts = {
    rel: Option<string>,
    target: Option<Target>,
    href: string,
};

type ReturnValue = [() => void, string]

export default function (opts: FacebookShareOpts): ReturnValue {
    const encodeUrl = encodeURIComponent(opts.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeUrl}`;

    // TODO : Refactor this
    const redirect = () => {
        window.open(
            facebookUrl,
            opts.target.unwrapOr('_blank'),
            opts.rel.unwrapOr(''),
        );
    };

    return [redirect, facebookUrl];
}