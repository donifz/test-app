"use client";

import ContentForm from "@/components/ContentForm";

const ScreenContent = ({ params }: { params: { screen: string } }) => {
    return (
        <div>
            <ContentForm screen={params.screen} />
        </div>
    );
};

export default ScreenContent;
