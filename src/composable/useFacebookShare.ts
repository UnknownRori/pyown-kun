import type { Target } from "@/types/RedirectOpts";
import type { Option } from "@sniptt/monads";

import defaultRedirectOpts from "@/config/defaultRedirectOpts";
import Redirect from '@/composable/useRedirect';

type FacebookShareOpts = {
    rel: Option<string>,
    target: Option<Target>,
    href: string,
};

type ReturnValue = [() => void, string]

export default function (opts: FacebookShareOpts): ReturnValue {
    const encodeUrl = encodeURIComponent(opts.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeUrl}`;

    const redirect = Redirect({
        ...defaultRedirectOpts,
        href: facebookUrl,
    });

    return [redirect, facebookUrl];
}