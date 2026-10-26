export default function Footer() {
    return (
        <footer className='bg-secondary text-secondary-foreground py-10 text-center'>
            © {new Date().getFullYear()} Karlo Zrilić. All rights reserved.
        </footer>
    );
}