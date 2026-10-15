const API_URL = "http://localhost:3000";

export const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`);

    if (!res.ok) {
        throw new Error("Không tải được danh sách sản phẩm");
    }

    return res.json();
}

export const createProduct = async ({name, price}) => {
    const res = await fetch(`${API_URL}/products`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name,
            price,
        })
    });

    if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error);
    }

    return res.json();
}

export const updateProduct = async ({id, name, price}) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name,
            price
        })
    });

    if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error);
    }

    return res.json();
}

export const deleteProduct = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error);
    }

    return res.json();
}