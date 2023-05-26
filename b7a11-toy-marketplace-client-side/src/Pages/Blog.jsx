

const Blog = () => {
    return (
        <div className="mb-7 container mx-auto">
            <h2 className="font-bold text-3xl text-center mb-4 underline">Question and Answer</h2>
            <img src="" alt="" />
            <div className="max-w-7xl mx-auto z-0">
                <div tabIndex="0" className="collapse collapse-plus collapse-open border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        <h3>QS no. 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    </div>
                    <div className="collapse-content ">
                        <p className="">
                            <strong className="text-xl italic font-mono">Definition of access token:</strong> An access token is a credential that grants a client (such as a web application or mobile app) permission to access protected resources on behalf of a user.Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.

                        </p>
                        <p className="">
                            <strong className="text-xl italic font-mono">Definition of refresh token:</strong> A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It is securely stored on the client-side and sent to the server to request a new access token. Unlike access tokens, refresh tokens are not sent with each request but kept as a means to obtain fresh access tokens without requiring the user to reauthenticate.

                        </p>
                        <div>
                            <h2 className="font-bold">To store access and refresh tokens on the client-side:</h2>
                            <p>Access tokens should be stored in memory (e.g., in a variable) or in a secure storage mechanism such as an HTTP-only cookie or browser's local storage. Storing them in memory is generally recommended for better security. <br /><br />

                                Refresh tokens should be stored securely, usually as an HTTP-only cookie to protect against cross-site scripting (XSS) attacks. Cookies provide automatic inclusion in subsequent requests, ensuring the refresh token is sent when needed. <br />

                                If we store our tokens in a http-only cookie then opr app will not have access to them, so we won't be able to call any APIs from our app. I think this is not what we are trying to achieve.
                                That's why it's important to handle access and refresh tokens securely and follow best practices to prevent unauthorized access and token leakage.
                            </p>
                        </div>
                    </div>
                </div>
                <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5">
                    <div className="collapse-title text-xl font-medium">
                        <h3>Qs no 2: Compare SQL and NoSQL databases?</h3>
                    </div>
                    <div className="collapse-content ">
                        <h2 className="text-xl mb-4"> Compare between SQL and NoSQL:</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head*/}
                                <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Stands for Structured Query Language</td>
                                    <td>Stands for Not Only SQL</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="active">
                                    <th>2</th>
                                    <td>Relational database management system (RDBMS)</td>
                                    <td>Non-relational database management system</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Suitable for structured data with predefined schema</td>
                                    <td>Suitable for unstructured and semi-structured data</td>
                                </tr>
                                <tr className="active">
                                    <th>4</th>
                                    <td>Data is stored in tables with columns and rows</td>
                                    <td>Data is stored in collections or documents</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management</td>
                                    <td>Does not necessarily follow ACID properties</td>
                                </tr>
                                <tr className="active">
                                    <td>6</td>
                                    <td>Supports JOIN and complex queries</td>
                                    <td>Does not support JOIN and complex queries</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Requires vertical scaling to handle large volumes of data</td>
                                    <td>Horizontal scaling is possible to handle large volumes of data</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                    </div>
                </div>
                <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        <h3>Qs. no. 3: What is express js? What is Nest JS?</h3>
                    </div>
                    <div className="collapse-content ">
                        <p className="mb-5">
                            <strong className="text-xl italic font-mono">Definition of express js:</strong> NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. <br />

This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project.

                        </p>
                        <p className="">
                            <strong className="text-xl italic font-mono">Definition of Nest js:</strong> Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes. <br />

It can be used with Node to create single-page, multi-page, or hybrid web applications. It supports the MVC architectural pattern for designing web applications: Model, View, and Controller

                        </p>
                    </div>
                </div>
                <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5">
                    <div className="collapse-title text-xl font-medium">
                        <h3>QS no. 4: What is MongoDB aggregate and how does it work?</h3>
                    </div>
                    <div className="collapse-content ">
                        <p><strong className="text-xl italic font-mono">Definition of MongoDB aggregate:</strong> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. <br />
                        </p>
                        <p className="font-bold">Here's an overview of how the aggregate function works:</p>
                        <ul>
                            <li><span className="font-bold underline">1. Pipeline Stages:</span> The aggregate function processes data through a series of pipeline stages. Each stage performs a specific operation on the data, such as filtering, grouping, sorting, projecting, or computing aggregations.</li> <br />
                            <li><span className="font-bold underline">2. Data Input:</span> The data input for the aggregate function is typically a MongoDB collection. You can specify a query to filter the documents from the collection that will be included in the aggregation pipeline.</li><br />
                            <li><span className="font-bold underline">3.	Pipeline Operators:</span> Within each stage of the pipeline, you can use various operators to shape and transform the data. These operators include:</li><br />
                            <ol className="ml-5">
                                <li>●	$match: Filters the documents based on specified conditions.
</li>
<li>
●	$group: Groups documents together based on a specified key or keys, allowing you to perform aggregations on the grouped data.</li>
<li>
●	$project: Reshapes the documents, including selecting specific fields, computing new fields, or excluding fields from the output.</li>
<li>
●	$sort: Sorts the documents based on specified fields.</li>
<li>
●	$limit and $skip: Allow you to control the number of documents included in the output. Many more operators are available to perform a wide range of operations.</li> <br />
                            </ol>
                            <li><span className="font-bold underline">4.	Output:</span> The aggregate function produces a result set based on the operations performed in the pipeline stages. The output can be customized based on the specific operations and transformations applied.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;