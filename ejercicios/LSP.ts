interface UsersProvider {
    getUsers(): Array<{ name: string; lastname: string; email: string }>;
}

class UsersMySQL {
    getUsers() {
        return [{ name: 'John', lastname: 'Doe', email: 'example@gmail.com' }];
    }
}

class UsersMongo {
    getUsers() {
        return [{ name: 'John', lastname: 'Doe', email: 'example@gmail.com' }];
    }
}

class UsersPostgreSQL {
    getUsers() {
        return [{ name: 'John', lastname: 'Doe', email: 'example@gmail.com' }];
    }
}

function getUsers(usersProvider: { getUsers: () => Array<{ name: string; lastname: string; email: string }> }) {
    return usersProvider.getUsers();
}
