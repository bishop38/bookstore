import HeaderContainer from "@/components/header/HeaderContainer";
import styles from './LayoutBlock.module.scss'

export default async function LayoutBlock({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles['container']}>
            <HeaderContainer />
            {children}
        </div>
    );
}