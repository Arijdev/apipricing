import React, { useState } from 'react';
import './APIPricing.css'; // Custom CSS

const APIPricing = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="header">
                <h2>API Pricing</h2>
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
<p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
            <table className="pricing-table">
                <thead>
                    <tr>
                        <th>API</th>
                        <th>Model</th>
                        <th>Price Per 1K Tokens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>OpenAI</td>
                        <td>GPT-3.5</td>
                        <td>$0.002</td>
                    </tr>
                    <tr>
                        <td>OpenAI</td>
                        <td>GPT-4</td>
                        <td>$0.03</td>
                    </tr>
                    <tr>
                        <td>Together AI</td>
                        <td>Llama-2-70b</td>
                        <td>$0.0008</td>
                    </tr>
                    <tr>
                        <td>Together AI</td>
                        <td>Llama-2-13b</td>
                        <td>$0.0006</td>
                    </tr>
                </tbody>
            </table>

            <div className="details">
                <h5>Token Estimation</h5>
                <p>
                    On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                </p>
                <h5>Billing</h5>
                <p>
                    You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
                </p>
            </div>
        </div>
    );
};

export default APIPricing;
