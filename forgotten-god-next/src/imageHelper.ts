export const imageLoader = ({src}: {src: string}) => {
    return `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/image/${src}`;
}