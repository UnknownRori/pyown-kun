import type { Option } from "@sniptt/monads";

// Maybe next time ?
// type RefererPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin'
//     | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

type Target = '_self' | '_blank' | '_parent' | '_top';

type RedirectOpts = {
    rel: Option<string>,
    target: Option<Target>,
    href: string,
};

export { RefererPolicy, Target };

export default RedirectOpts;