"use client";

import { ComponentProps, createContext, ElementRef, forwardRef, ReactNode, useContext } from "react";
import dayjs from 'dayjs'
import { cn } from "@/lib/utils";
import { Badge, BadgeProps } from "../ui/badge";
import Icon, { IconProps } from "../icon";
import Image from "next/image";

interface BaseInterface {
    children: ReactNode
}
interface AuthorInterface {
    name: string;
    avatar: string;
    publishedAt: string;
}

interface PostInterface extends BaseInterface { }

namespace Heading1 {
    export type Ref = ElementRef<"h1">;
    export interface Props extends ComponentProps<"h1"> { }
}

namespace Paragraph {
    export type Ref = ElementRef<"p">;
    export interface Props extends ComponentProps<"p"> { }
}

namespace Div {
    export type Ref = ElementRef<"div">;
    export interface Props extends ComponentProps<"div"> { }
}

interface TagChildInterface extends BadgeProps { }

namespace PostStatInterface {
    export type Ref = ElementRef<"div">;
    export interface Props extends ComponentProps<"div"> {
        iconProps: IconProps,
        textProps: { className?: ComponentProps<"span">['className'], text: string }

    };
}

const Post = ({ children }: PostInterface) => {
    return <div className="p-4 rounded-lg shadow-md">
        {children}
    </div>
}

Post.displayName = "Post";


const PostAuthor = ({ name, avatar, publishedAt }: AuthorInterface) => {
    return (
        <div className="flex space-x-2">
            <Image className="w-12 h-12" width={200} height={200} src={avatar} alt={name} />
            <div className="flex flex-col">
                <span className="font-semibold">{name}</span>
                <span>{dayjs(publishedAt).format("ddd M, YYYY")}</span>
            </div>
        </div>
    )
}

PostAuthor.displayName = "PostAuthor";

const PostContentContext = createContext<boolean>(false);

const PostContent = forwardRef<
    Div.Ref,
    Div.Props
>(({ className, ...props }, ref) => (
    <PostContentContext.Provider value={true}>
        <div ref={ref} className={cn("p-6 space-y-3", className)} {...props} />
    </PostContentContext.Provider>
))
PostContent.displayName = "PostContent"

const usePostContentContext = () => {
    const isInsidePostContent = useContext(PostContentContext);
    if (!isInsidePostContent) {
        throw new Error("This component must be a child of PostContent");
    }
};


const PostTitle = forwardRef<Heading1.Ref, Heading1.Props>(({ className, ...props }, ref) => {
    usePostContentContext();
    return <h1 className={cn("md:text-4xl text-2xl font-bold", className)} {...props} ref={ref} />;
});
PostTitle.displayName = "PostTitle";

const PostDescription = forwardRef<Paragraph.Ref, Paragraph.Props>(({ className, ...props }, ref) => {
    usePostContentContext();
    return <p className={cn("md:text-base text-sm", className)} {...props} ref={ref} />;
});

PostDescription.displayName = "PostDescription";


const PostTags = ({ children }: {
    children: ReactNode
}) => {
    usePostContentContext()
    return <div className="flex flex-wrap gap-5">
        {children}
    </div>
}

PostTags.displayName = "PostTags";

const PostTagsChild = (props: TagChildInterface) => {
    return <Badge {...props} />
}

PostTagsChild.displayName = "PostTagsChild";


const PostFooter = forwardRef<Div.Ref, Div.Props>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))

PostFooter.displayName = "PostFooter";

const PostStat = forwardRef<PostStatInterface.Ref, PostStatInterface.Props>(({ iconProps, textProps, className, ...props }, ref) => (
    <div {...props} ref={ref} className={cn("flex space-x-2", className)}>
        <Icon {...iconProps} />
        <span className={textProps.className}>{textProps.text}</span>
    </div>
))

PostStat.displayName = "PostStat";


export { Post, PostAuthor, PostContent, PostTitle, PostDescription, PostTags, PostTagsChild, PostFooter, PostStat }