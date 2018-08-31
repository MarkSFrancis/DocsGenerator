using System;
using System.IO;

namespace DocsGenerator.ExampleNamespace
{
    /// <summary>
    /// A sample logging class
    /// </summary>
    public class SampleClass : ISampleClass
    {
        private readonly TextWriter writer;

        /// <summary>
        /// Create a new <see cref="SampleClass"/> with the specified logger
        /// </summary>
        /// <param name="writer">The writer to use when writing out errors</param>
        public SampleClass(TextWriter writer)
        {
            this.writer = writer;
        }

        /// <summary>
        /// Log an error out
        /// </summary>
        /// <param name="errorOnUtc">The <see cref="DateTime"/> on which the error <paramref name="ex"/> occured</param>
        /// <param name="ex">The error which occured</param>
        public void LogError(DateTime errorOnUtc, Exception ex)
        {
            writer.WriteLine($"Error occured on {errorOnUtc}: {ex}");
        }
    }
}
