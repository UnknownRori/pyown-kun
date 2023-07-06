import type { Target } from '@/types/ShareOpts';
import type { Option } from '@sniptt/monads';

type TwitterShareOpts = {
    rel: Option<string>,
    text: Option<string>,
    target: Option<Target>,
    href: string,
};

export default function (opts: TwitterShareOpts) {
    const encodeUrl = encodeURIComponent(opts.href);
    const encodeText = encodeURIComponent(opts.text.unwrapOr(''));
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeUrl}&text=${encodeText}`;

    window.open(
        twitterUrl,
        opts.target.unwrapOr('_blank'),
        opts.rel.unwrapOr(''),
    );
}