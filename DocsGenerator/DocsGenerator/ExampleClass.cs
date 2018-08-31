using System;

namespace DocsGenerator
{
    /// <summary>
    /// Test
    /// <code language="csharp">// This is sample code</code>
    /// </summary>
    public class ExampleClass
    {
        public int Id { get; set; }

        /// <summary>
        /// Gets a sample name
        /// </summary>
        /// <param name="firstName">The person's first name</param>
        /// <param name="lastName">The person's last name</param>
        /// <param name="middleNames">A <see cref="string[]"/> of all the person's middle names</param>
        /// <returns>The name of the current person</returns>
        /// <remarks>Puts a space between each name</remarks>
        /// <example>
        /// <code language="lang-csharp">
        /// var example = new ExampleClass();
        /// var fullName = example.GetFullName("John", "Smith", "David", "James");
        /// 
        /// // Output: "John David James Smith"
        /// Console.WriteLine(fullName);
        /// </code>
        /// </example>
        public string GetFullName(string firstName, string lastName, params string[] middleNames)
        {
            throw new NotImplementedException();
        }
    }
}
