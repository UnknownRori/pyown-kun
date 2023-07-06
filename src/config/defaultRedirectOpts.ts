import { Some } from "@sniptt/monads";

import type RedirectOpts from "@/types/RedirectOpts";

export default {
    href: '',
    rel: Some('norefferer'),
    target: Some('_blank'),
} as RedirectOpts;