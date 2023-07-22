type TitleProps = {
    description: string;
    index: number | string;
}

export const Title = ({ description, index }: TitleProps) => {
    return (
        <div className="w-full flex justify-center md:justify-start md:text-xl lg:text-3xl space-x-1 font-barlow-condensed tracking-wider text-base mb-8">
            <span className="text-white opacity-20">{index}</span>
            <h2 className="uppercase text-gray-sky">{description}</h2>
        </div>
    )
}