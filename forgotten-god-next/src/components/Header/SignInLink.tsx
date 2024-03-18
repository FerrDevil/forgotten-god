"use client"

import { signIn } from "next-auth/react";
import { HeaderNavigationButton, HeaderNavigationItem, HeaderNavigationItemTitle, HeaderNavigationLink, LoginLinkSVG } from "./styles";
import { usePathname } from "next/navigation";

export default function SignInLink() {

  const pathname = usePathname()
  return (
    <HeaderNavigationItem>
        <HeaderNavigationLink $isActive={false} href={`/signIn?redirectTo=${pathname}`}>
            <LoginLinkSVG/>
            <HeaderNavigationItemTitle>Войти</HeaderNavigationItemTitle>
        </HeaderNavigationLink>
    </HeaderNavigationItem>
  )
}
