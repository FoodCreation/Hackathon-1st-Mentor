import { useState } from "react";

export default async function handler (req, res) {
    if (req.method === 'POST') {
        const { food_type, hunger_level } = req.body;

        try {
            const response = await fetch('http://localhost:8000/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ food_type, hunger_level }),
            });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json( 'Method ${req.method} Not Allowed' );
    }
}