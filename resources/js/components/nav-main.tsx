import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { Home, Minus, Plus, User, Users } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export function NavMain() {
    const { url } = usePage();
    // const { can } = usePermission();

    const data = {
        navMain: [
            {
                title: "User Management",
                url: "#",
                icon: User,
                isVisible: true,
                items: [
                    {
                        title: "Users",
                        url: "/dashboard/users",
                        isVisible: true,
                        isActive: url.startsWith('/dashboard/users'),
                    },
                    {
                        title: "Roles",
                        url: "/dashboard/roles",
                        isVisible: true,
                        isActive: url.startsWith('/dashboard/roles'),
                    },
                ],
            },
            {
                title: "People",
                url: "#",
                icon: Users,
                isVisible: true,
                items: [
                    {
                        title: "Customers",
                        url: "/dashboard/customers",
                        isVisible: true,
                        isActive: url.startsWith('/dashboard/customers'),
                    },
                    {
                        title: "Suppliers",
                        url: "/dashboard/suppliers",
                        isVisible: true,
                        isActive: url.startsWith('/dashboard/suppliers'),
                    },
                ],
            },
        ],
    }

    return (
        <SidebarGroup>
            <SidebarMenu>
                {/* Dashboard as first item */}
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={url === '/dashboard'}>
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <Home />
                            <span>Dashboard</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                {data.navMain.filter(item => item.isVisible)?.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Collapsible key={item.title} defaultOpen={item.items?.filter(it => it?.isActive)?.length > 0} className="group/collapsible">
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton className="">
                                        {Icon && <Icon />}
                                        {item.title}
                                        <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                                        <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                {item.items?.length ? (
                                    <CollapsibleContent >
                                        <SidebarMenuSub>
                                            {item.items?.filter(it => it.isVisible)?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                                                        <Link className="" href={subItem.url}>{subItem.title}</Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                ) : null}
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}

            </SidebarMenu>
        </SidebarGroup>
    );
    // const page = usePage();
    // return (
    //     <SidebarGroup className="px-2 py-0">
    //         <SidebarGroupLabel>Platform</SidebarGroupLabel>
    //         <SidebarMenu>
    //             {items.map((item) => (
    //                 <SidebarMenuItem key={item.title}>
    //                     <SidebarMenuButton
    //                         asChild
    //                         isActive={page.url.startsWith(
    //                             resolveUrl(item.href),
    //                         )}
    //                         tooltip={{ children: item.title }}
    //                     >
    //                         <Link href={item.href} prefetch>
    //                             {item.icon && <item.icon />}
    //                             <span>{item.title}</span>
    //                         </Link>
    //                     </SidebarMenuButton>
    //                 </SidebarMenuItem>
    //             ))}
    //         </SidebarMenu>
    //     </SidebarGroup>
    // );
}
