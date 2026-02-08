import type { Component, Snippet } from 'svelte'

export declare namespace API {
  export interface Profile {
    id: number
    email: string
    username: string
    profile_url: string
    email_verified_at?: string | null | undefined
    status: string
  }

  type Theme = 'light' | 'dark' | 'system'
  type Direction = 'ltr' | 'rtl'
  type Collapsible = 'offcanvas' | 'icon' | 'none' | 'default'
  type Variant = 'inset' | 'sidebar' | 'floating'
  type Locale = 'en-US' | 'zh-CN'

  export interface Menu {
    id: number
    name?: string
    display_name: string
    path?: string
    component?: string
    redirect?: string
    meta: MenuMeta
    parent_id?: number
    children?: Menu[]
    sort_id?: number
  }

  export interface MenuMeta {
    hidden?: boolean
    icon: string
    title?: string
    affix?: boolean
    permissions?: string
    keep_alive?: boolean
  }

  export interface NavItem {
    title: string
    url: string
    icon?: Snippet
    items?: NavItem[]
    badge?: number
  }

  export interface NavGroup {
    title: string
    items: NavItem[]
  }

  export interface ThemeItem {
    value: string
    label: string
    icon?: Component
    dir?: Direction
  }
}
