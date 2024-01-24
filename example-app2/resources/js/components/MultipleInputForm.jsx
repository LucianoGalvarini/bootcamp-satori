export const MultipleInputForm = () => {
    return (
        <>
            <h1>Multiple Input Form</h1>
            <hr />

            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};
