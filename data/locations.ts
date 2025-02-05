interface Branch {
    id: number;
    name: string;
    address: string;
    manager: string;
    image: string;
}
export const branches: Branch[] = [
    {
        id: 1,
        name: 'Downtown Branch',
        address: '123 Main Street, City 10001',
        manager: 'John Smith',
        image: 'https://i.pinimg.com/736x/45/7d/91/457d91520934a7ebcfec5b2106a98391.jpg'
    },
    {
        id: 2,
        name: 'Westside Office',
        address: '456 West Avenue, City 10002',
        manager: 'Sarah Johnson',
        image: 'https://i.pinimg.com/736x/08/90/5c/08905cde53282027b8b77df4d6765a21.jpg'
    },
]