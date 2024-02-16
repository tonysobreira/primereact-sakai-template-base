/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card mb-0">
                    <h5>Dashboard Page</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>

                    <Button label='TEST BUTTON' ></Button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
