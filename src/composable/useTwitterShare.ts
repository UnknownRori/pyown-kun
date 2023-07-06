import type { Target } from '@/types/RedirectOpts';
import type { Option } from '@sniptt/monads';

type TwitterShareOpts = {
    rel: Option<string>,
    text: Option<string>,
    target: Option<Target>,
    href: string,
};

type ReturnValue = [() => void, string]

export default function (opts: TwitterShareOpts): ReturnValue {
    const encodeUrl = encodeURIComponent(opts.href);
    const encodeText = encodeURIComponent(opts.text.unwrapOr(''));
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeUrl}&text=${encodeText}`;

    // TODO : Refactor this
    const redirect = () => {
        window.open(
            twitterUrl,
            opts.target.unwrapOr('_blank'),
            opts.rel.unwrapOr(''),
        );
    };

    return [redirect, twitterUrl];
}