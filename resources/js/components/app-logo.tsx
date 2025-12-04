
export default function AppLogo() {
    return (
        <>
            {/* <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground"> */}
                <img className="size-8 fill-current text-white dark:text-black" src="/images/flex_logo.png" alt="Flex Logo" />
            {/* </div> */}
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {import.meta.env.VITE_APP_NAME || 'Boardrooms'}
                </span>
            </div>
        </>
    );
}
